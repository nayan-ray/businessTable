import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';



import "./table.css"

import { apiRequest } from '../apiRequest';


export const TableBusiness = () => {
    const [search, setSearch] = useState("0");
    const [limit, setLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const ProductList = useSelector((state) => state.product.productList);
    const totalProducts = useSelector((state) => state.product.totalProducts);
    const loading = useSelector((state) => state.loader.isLoading);


    useEffect(() => {

        apiRequest(currentPage, limit, search);

    }, [])

    const handlePageClick = (data) => {

        apiRequest(data.selected + 1, limit, search);
    }

    const handlePerPageChange = (e) => {
        setLimit(e.target.value);
        apiRequest(1, e.target.value, search);
    }

    const handleSearch = () => {
        apiRequest(currentPage + 1, limit, search);
    }


    return (
        <div className='tableContainer bg-white d-flex flex-column'>

            <div >
                <Container fluid="md" className='mt-4'>
                    <Row>
                        <Col md={6} className='header-text-fs fs-5 fw-bold text-secondary mt-1 text-center  text-md-start mb-2'>
                            MY PRODUCT LIST
                        </Col>
                        <Col xs={4} md={2} className=''>
                            <Form.Select aria-label="Default select example" size='' className='' variant='' onChange={handlePerPageChange}>
                                <option value="20">20 per page</option>
                                <option value="5">5 per page</option>
                                <option value="10">10 per page</option>
                                <option value="15">15 per page</option>
                                <option value="20">20 per page</option>
                                <option value="25">25 per page</option>
                                <option value="30"> 30 per page</option>
                                <option value="50">50 per page</option>
                                <option value="100">100 per page</option>
                            </Form.Select>
                        </Col>
                        <Col xs={8} md={4} className=' '>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Enter Search Term"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    value={search === '0' ? '' : search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        if (e.target.value === '') {
                                            setSearch('0');
                                            apiRequest(currentPage + 1, limit, '0');
                                        }
                                    }}
                                />
                                <Button variant="outline-secondary" id="button-addon2" className='px-1 px-md-3' onClick={handleSearch}>
                                    Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className='flex-grow-1 overflow-auto'>
                {loading ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ height: "100px" }}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>PRODUCTS</th>
                                <th>PRICE</th>
                                <th>STOCK</th>
                                <th>CODE</th>
                            </tr>
                        </thead>
                        <tbody>

                            {ProductList && ProductList.map((product, i) => {
                                return (
                                    <tr key={i}>
                                        <td className=''>
                                            <div className='d-flex gap-4 align-items-center'>
                                                <img className=' object-fit-cover' style={{ width: "150px" }} src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="" />
                                                <div className=' '>
                                                    <h6 className='text-secondary'>{product.title}</h6>
                                                    <p className='text-secondary'>{product.shop_name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='d-flex flex-column df'>
                                            <div className=' flex-grow-1 d-flex flex-column justify-content-center align-items-center'>
                                                <h6 className='text-secondary'>${product.price}</h6>
                                                <p className='text-secondary'>{product.category}</p>
                                            </div>
                                        </td>
                                        <td className='text-secondary'>{product.stock}</td>
                                        <td className='text-secondary'>{product.product_code}</td>
                                    </tr>
                                )

                            })}

                        </tbody>
                    </Table>
                )}


            </div>
            <div >
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={3}
                    pageCount={Math.ceil(totalProducts / limit)}
                    forcePage={currentPage}
                    // onPageChange={(data) => console.log(data.selected)}
                    previousLabel="< previous"
                    pageClassName="page-item me-2 ms-2"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item "
                    nextLinkClassName="page-link "
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination d-flex justify-content-center"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                // onClick={(e) => console.log(e.selected)}
                />
            </div>

        </div>
    )
}
