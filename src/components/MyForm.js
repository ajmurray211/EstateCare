import { useState } from "react";
import { Row, Col, Input, Button, Label } from "reactstrap";
import SendEmail from "./SendEmail";

const ExampleForm = () => {
    const [rows, setRows] = useState([{}]);

    const handleAddRow = () => {
        setRows([...rows, {}]);
    };

    const handleRemoveRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newRows = [...rows];
        newRows[index][name] = value;
        setRows(newRows);
    };

    const findTotal = () => {
        let total = 0
        rows.forEach((r) => {
            let parsed = (parseInt(r.hours))
            if (isNaN(parsed)) { return (0) }
            total += parsed
        })
        return total
    }

    console.log(rows)

    return (
        <>
            {rows.map((row, index) => (
                <Row className="row jobInput" key={index}>
                    {/* <Col md={1}>
                    <Label>Date</Label>
                        <Input
                            type="text"
                            name="date"
                            value={row.date || ""}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </Col> */}
                    <Col md={3}>
                        <Label>Start</Label>
                        <Input
                            type="datetime-local"
                            name="startTime"
                            value={row.startTime || ""}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <Label>Stop</Label>
                        <Input
                            type="datetime-local"
                            name="endTime"
                            value={row.endTime || ""}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </Col>
                    <Col md={3}>
                        <Label>Full Job Name & Address</Label>
                        <Input
                            type="textarea"
                            name="jobAddress"
                            value={row.jobAddress || ""}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </Col>
                    <Col md={2}>
                        <Label>Type of work</Label>
                        <Input
                            type="select"
                            name="typeOfWork"
                            value={row.typeOfWork || ""}
                            onChange={(e) => handleInputChange(index, e)}
                        >
                            <option value="">Select a type</option>
                            <option value="Mulch">Mulch</option>
                            <option value="Pavers">Pavers</option>
                            <option value="Grading">Grading</option>
                            <option value="Grass">Grass</option>
                        </Input>
                        <Label>Type of Job</Label>
                        <Input
                            type="select"
                            name="typeOfJob"
                            value={row.typeOfJob || ""}
                            onChange={(e) => handleInputChange(index, e)}
                        >
                            <option value="">Select a type</option>
                            <option value="Roof Right">Roof Right</option>
                            <option value="Errends">Errends</option>
                            <option value="Other">Other</option>
                        </Input>
                    </Col>
                    <Col md={2}>
                        <Label>State</Label>
                        <Input
                            type="text"
                            name="state"
                            value={row.state || ""}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <Label>Hours</Label>
                        <Input
                            type="datenumber"
                            name="hours"
                            value={row.hours || ''}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </Col>
                    <Col md={1}>
                        {rows.length > 1 && (
                            <Button color="danger" onClick={() => handleRemoveRow(index)}>
                                Delete
                            </Button>
                        )}
                    </Col>
                </Row>
            ))}
            <Row>
                <Col md={7} />
                <Col md={2}>
                    <Label>Total Hours</Label>
                    <Input disabled value={findTotal()} />
                </Col>
            </Row>
            <Button color="primary" onClick={handleAddRow}>
                Add Row
            </Button>
            <SendEmail/>
        </>
    );
};

export default ExampleForm;
