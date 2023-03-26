import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";

const Sports = () => {
    const [addEditModalVisibilty, setAddEditModalVisibilty] = useState(false);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Image",
            dataIndex: "image",
            render: () => (
                <img src='' alt="" height="60" width="60" />
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Category",
            dataIndex: "category",
        },
        {
            title: "Actions",
            dataIndex: "_id",
            render: (id, record) => (
                <div className="d-flex">
                    <EditOutlined
                        className="mx-2"
                        onClick={() => {

                            setAddEditModalVisibilty(true);
                        }}
                    />
                    <DeleteOutlined className="mx-2" />
                </div>
            ),
        },
    ];


    return (
        <div>
            <section id="sidebar">
                <a href="#" class="brand">
                    <i class='bx bxs-smile'></i>
                    <span class="text">Admin Panel</span>
                </a>
                <ul class="side-menu top">
                    <Link to={'/'}>
                        <li >
                            <a href="#">
                                <i class='bx bxs-dashboard' ></i>
                                <span class="text">Dashboard</span>
                            </a>
                        </li>
                    </Link>
                    <Link to={'/Shirt'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-shopping-bag-alt' ></i>
                                <span class="text">Shirt</span>
                            </a>
                        </li>
                    </Link>
                    <Link to={'/tshirt'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-doughnut-chart' ></i>
                                <span class="text">T-Shirt</span>
                            </a>
                        </li>
                    </Link>

                    <Link to={'/jeans'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-message-dots' ></i>
                                <span class="text">Jeans</span>
                            </a>
                        </li>
                    </Link>

                    <Link to={'/sports'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Sports</span>
                            </a>
                        </li>
                    </Link>

                    <Link to={'/kurtas'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Kurtas</span>
                            </a>
                        </li>
                    </Link>
                    <Link to={'/jacket'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Jackets</span>
                            </a>
                        </li>
                    </Link>

                </ul>
                <ul class="side-menu">
                    <li>
                        <a href="#">
                            <i class='bx bxs-cog' ></i>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>

            <section id="content">
                <nav>

                </nav>

                <main>
                    <div class="head-title">
                        <div class="left">
                            <h1>Sports</h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">

                        <Button type="primary" onClick={() => setAddEditModalVisibilty(true)}>
                            Add Item
                        </Button>

                    </div>
                    <br></br>
                    <Table columns={columns} bordered />

                    {addEditModalVisibilty && (
                        <Modal
                            onCancel={() => {
                                setAddEditModalVisibilty(false)
                            }}
                            visible={addEditModalVisibilty}

                            footer={false}
                        >
                            <Form
                                layout="vertical"

                            >
                                <Form.Item name="name" label="Name">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="price" label="Price">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="image" label="Image URL">
                                    <Input />
                                </Form.Item>

                                <Form.Item name="size" label="Size">
                                <Select>
                                <Select.Option value="s">S</Select.Option>
                                <Select.Option value="m">M</Select.Option>
                                <Select.Option value="l">L</Select.Option>
                                <Select.Option value="xl">XL</Select.Option>
                                <Select.Option value="xxl">XXL</Select.Option>
                                <Select.Option value="sm">S M </Select.Option>
                                <Select.Option value="sml">S M L</Select.Option>
                                <Select.Option value="smlxl">S M L XL</Select.Option>
                                <Select.Option value="smlxlxxl">S M L XL XXL</Select.Option>
                            </Select>
                                </Form.Item>

                                <div className="d-flex justify-content-end">
                                    <Button htmlType="submit" type="primary">
                                        SAVE
                                    </Button>
                                </div>
                            </Form>
                        </Modal>
                    )}
                </main>

            </section>



        </div>
    )
}

export default Sports