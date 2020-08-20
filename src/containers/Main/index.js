import React, { useState } from 'react'
import Navbar from '../../components/NavBar'
import sizeof from 'object-sizeof'
import './styles.css'

function Main() {
    const [arrayTable, setArrayTable] = useState([[undefined]])

    function addRow() {
        const newTable = arrayTable.slice(0)
        newTable.push([undefined])
        setArrayTable(newTable)
    }

    function deleteRow(indexRow) {
        const newTable = arrayTable.slice(0)
        if (newTable.length !== 1) {
            newTable.splice(indexRow, 1)
            setArrayTable(newTable)
        }
    }

    function addCol(indexRow) {
        const newTable = arrayTable.slice(0)
        newTable[indexRow].push(undefined)
        setArrayTable(newTable)
    }

    function deleteCol(indexRow) {
        const newTable = arrayTable.slice(0)
        if (newTable[indexRow].length !== 1) {
            newTable[indexRow].splice(newTable[indexRow].length - 1, 1)
            setArrayTable(newTable)
            return
        }
        deleteRow(indexRow)

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
                    <div className="controls">
                        <div className="control-row">
                            {
                                arrayTable.map((row, indexRow) => (
                                    <div className="control" key={indexRow}>
                                        <div className="button-control delete-row" onClick={() => deleteRow(indexRow)}>
                                            <strong>X</strong>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                            <div className="cells" data-testid="table">
                                {
                                    arrayTable.map((row, indexRow) => (
                                        <div className="table-row" key={indexRow}>
                                            {
                                                row.map((col, indexCol) => (
                                                    <input
                                                        type="text"
                                                        key={indexCol}
                                                        placeholder={`R${indexRow + 1}, C${indexCol + 1}`}
                                                        onChange={(input) => typeCell(indexRow, indexCol, input)}
                                                        value={col}
                                                    />
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        <div className="control-col">
                            {
                                arrayTable.map((row, indexRow) => (
                                    <div className="control">
                                        <div className="button-control add-col" data-testid="add-col" onClick={() => addCol(indexRow)}>
                                            <strong>+</strong>
                                        </div>
                                        <div className="button-control delete-col" onClick={() => deleteCol(indexRow)}>
                                            <strong>-</strong>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
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
                        <p>Size: <strong>{sizeof(arrayTable)} Bytes</strong></p>
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
