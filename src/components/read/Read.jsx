import React, {useEffect} from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";

const Read = () => {
useEffect(() => {
  axios.get('http://127.0.0.1:8000/products/').then((getData)=>{
    console.log(getData)
  })
}, )


  return (
    <div style={{maxWidth:700}}>
      <Table celled fixed singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell
          title={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            'et dolore magna aliqua.',
          ].join(' ')}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Shorter description</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>Shorter description</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    </div>
  );
};

export default Read;
