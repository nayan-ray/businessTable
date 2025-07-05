// api calling
import axios from 'axios';  

import { hideLoader, showLoader } from './feature/product/loaderSlice';
import { setProductList, setTotalProducts } from './feature/product/productSlice';
import { store } from './app/store';



export const apiRequest = async (page, limit, search) => {
   
    const url = `http://localhost:5000/api/v1/${page}/${limit}/${search}`;
    try {
        store.dispatch(showLoader());
        const response = await axios.get(url);
        store.dispatch(hideLoader());
        if (response.status === 200) {
            let totalProducts;
            const productList = response.data['data'][0]['products'];
       
            if(response.data['data'][0]['totalCount'].length > 0){
                totalProducts = response.data['data'][0]['totalCount'][0]['count'];
                
            }
                   
            if (productList && productList.length > 0) {
                store.dispatch(setProductList(productList));
                store.dispatch(setTotalProducts(totalProducts));
            }else {
                store.dispatch(setProductList([]));
                store.dispatch(setTotalProducts(0));
            }
            
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
       console.log("Error fetching product list:", error);
       
        store.dispatch(hideLoader());
        store.dispatch(setProductList([]));
        store.dispatch(setTotalProducts(0));
       
    }
}