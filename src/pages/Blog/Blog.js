import React from 'react';
import { Table } from 'react-bootstrap';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center text-primary'>Question And Answer</h1>
                    </div>
                    <div className="col-12 col-lg-8 mx-auto">
                        <h2 className='text-center my-3'>Difference between javascript and nodejs</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Javascripte</th>
                                    <th>Node JS</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                                    <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
                                    <td>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>JavaScript running any engine like Spider monkey FireFox, JavaScript Core Safari, V8 Google Chrome.</td>
                                    <td>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine..</td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-12 col-lg-8 mx-auto">
                        <h2 className='text-center my-3'>Differences between sql and nosql databases.</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Sql </th>
                                    <th>Nosql</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Tables with fixed rows and columns</td>
                                    <td>Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Developed in the 1970s with a focus on reducing data duplication</td>
                                    <td>Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices.</td>

                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className="col-12 col-lg-8 mx-auto">
                        <h2 className='text-center my-3'>What is the purpose of jwt and how does it work</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Answer</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</td>

                                </tr>


                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;