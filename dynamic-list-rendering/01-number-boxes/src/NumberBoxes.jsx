const NumberBoxes = () => {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <main>
            <h1>Boxes:</h1>
            {numbers.map(number => (
                <div className="box" key={number}><p className="number">{number}</p></div>
            ))}
        </main>
    )
}
export default NumberBoxes;