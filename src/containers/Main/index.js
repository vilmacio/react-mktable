import React, { useState } from 'react'
import Navbar from '../../components/NavBar'
import './styles.css'

function Main() {
    const [arrayTable, setArrayTable] = useState([[null, '']])

    function addRow() {
        const newTable = arrayTable.slice(0)
        newTable.push([null])
        setArrayTable(newTable)
    }

    function typeCell(indexRow, indexCol, input) {
        const newTable = arrayTable.slice(0)
        newTable[indexRow].splice(indexCol, 1, input.target.value)
        setArrayTable(newTable)
    }

    return (
        <>
            <Navbar />
            <div className="Main">
                <div className="table-container">
                    <div className="table-box">
                        {
                            arrayTable.map((row, indexRow) => (
                                <div className="table-row" key={indexRow}>
                                    <div className="control">
                                        <div className="button-control delete-row">
                                            <strong>X</strong>
                                        </div>
                                        {
                                            row.map((col, indexCol) => (
                                                <input
                                                    type="text"
                                                    key={indexCol}
                                                    placeholder={`R${indexRow + 1}, C${indexCol + 1}`}
                                                    onChange={(input) => typeCell(indexRow, indexCol, input)}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className="control">
                                        <div className="button-control add-col">
                                            <strong>+</strong>
                                        </div>
                                        <div className="button-control delete-col">
                                            <strong>-</strong>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className="button" data-testid="add-row" onClick={addRow}>
                        <p><strong>+</strong> row</p>
                    </div>
                </div>


                <div className="data-structure">
                    <h2>Information</h2>
                    <div className="info">
                        <p>Type: <strong>{typeof arrayTable}</strong></p>
                    </div>
                    <div className="info">
                        <p>Size: </p>
                    </div>
                    <div className="info">
                        <p>Data structure: <strong>{JSON.stringify(arrayTable)}</strong> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
