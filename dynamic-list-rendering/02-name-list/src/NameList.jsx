const NameList = () => {
   const names = [
     "Anna",
     "Vladislav",
     "Maria",
     "David",
     "Sofia",
     "Daniel",
     "Elena",
     "Michael",
     "Natalia",
     "Alexander",
     "Victoria",
     "Christopher",
   ];
    return (
        <main>
            <h2 className="heading">Colleagues:</h2>
            <ul className="name-list">
                {names.map(name => {
                    return (<li className="name-item" key={name}>
                        {name}
                    </li>)
                })}
            </ul>
        </main>
    )
}
export default NameList;