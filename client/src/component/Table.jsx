import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';


import "./table.css"

export const TableBusiness = () => {
    return (
        <div className='tableContainer bg-white d-flex flex-column'>

            <div >
                <Container fluid="md" className='mt-4'>
                    <Row>
                        <Col md={6} className='header-text-fs fs-5 fw-bold text-secondary mt-1 text-center  text-md-start mb-2'>
                            MY PRODUCT LIST
                        </Col>
                        <Col xs={4} md={2} className=''>
                            <Form.Select aria-label="Default select example" size='' className='' variant=''>
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
                                />
                                <Button variant="outline-secondary" id="button-addon2" className='px-1 px-md-3'>
                                    Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className='flex-grow-1 overflow-auto'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>PRODUCTS</th>
                            <th>PRICE</th>
                            <th>STOCK</th>
                            <th>CODE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=''>1fsdfjkdsfk jksdfk jk jksdjfk l dksfjl ksfd jklsdjfldksfl jdf ldfs jkk</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>




                    </tbody>
                </Table>
            </div>
            <div >
                <ReactPaginate
                    nextLabel="next >"
                    // onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={3}
                    pageCount={10}
                    forcePage={2}
                    onPageChange={(data) => console.log(data.selected)}
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
