import React from "react";
import { Card, Row, Col, Statistic, Divider, Table } from "antd"; // Ant Design components
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // Recharts components

const AdminDashboard = () => {
  // Example data
  const employeesData = [
    {
      key: "1",
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
    },
    { key: "2", name: "Jane Smith", position: "HR Manager", department: "HR" },
    {
      key: "3",
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
    },
    { key: "4", name: "Jane Smith", position: "HR Manager", department: "HR" },
    {
      key: "5",
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
    },
    { key: "6", name: "Jane Smith", position: "HR Manager", department: "HR" },
    {
      key: "7",
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
    },
    { key: "8", name: "Jane Smith", position: "HR Manager", department: "HR" },
    // Add more data as needed
  ];

  const monthlySalesData = [
    { name: "Jan", sales: 240000 },
    { name: "Feb", sales: 139800 },
    { name: "Mar", sales: 980000 },
    { name: "Apr", sales: 390800 },
    { name: "May", sales: 480000 },
    { name: "Jun", sales: 380000 },
    { name: "Jul", sales: 430000 },
    { name: "Aug", sales: 590000 },
    { name: "Sep", sales: 349000 },
    { name: "Oct", sales: 830000 },
    { name: "Nov", sales: 909800 },
    { name: "Dec", sales: 1200000 },
  ];

  return (
    <div className="hrms-dashboard-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card title="Employee Statistics" className="dashboard-card">
            <Statistic title="Total Employees" value={employeesData.length} />
            <Divider />
            <Table dataSource={employeesData} size="small" pagination={false}>
              <Table.Column title="Name" dataIndex="name" key="name" />
              <Table.Column
                title="Position"
                dataIndex="position"
                key="position"
              />
              <Table.Column
                title="Department"
                dataIndex="department"
                key="department"
              />
            </Table>
          </Card>
        </Col>
        <Col xs={24} lg={16}>
          <Card title="Monthly Sales" className="dashboard-card">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
