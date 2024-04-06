import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import { data } from "./inputData.js";

function App() {
  const [searchClub, setSearchClub] = useState("");

  return (
    <Container>
      <h3 className="text-center text-2xl mt-2 h-12">
        Search New Zealand Tennis Clubs
      </h3>
      <Form>
        <InputGroup className="my-2">
          <Form.Control
            type="search"
            placeholder="Tennis Club Name"
            onChange={(event) => setSearchClub(event.target.value)}
            className="placeholder-gray-950 placeholder-opacity-35 p-3"
          />
        </InputGroup>
      </Form>
      <Table striped bordered hover className="border-2 border-slate-300">
        <thead>
          <tr>
            <th>Tennis Club</th>
            <th>Start Year</th>
            <th>Total Members</th>
            <th>Attendance</th>
            <th>Joining Fee</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              searchClub.toLocaleLowerCase() === ""
                ? item
                : item.tennisClub.toLocaleLowerCase().includes(searchClub)
            )
            .sort((a, b) => (a.tennisClub > b.tennisClub ? 1 : -1))
            .map((item, index) => (
              <tr key={index}>
                <td>{item.tennisClub}</td>
                <td>{item.startYear}</td>
                <td>{item.totalMembers}</td>
                <td>{item.attendance}</td>
                <td>{item.joiningFee}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
