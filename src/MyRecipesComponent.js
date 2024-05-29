function MyRecipesComponent ({label, image, calories, ingredients}) {
    return (
        <div className="main">
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
            <div className="text">
                <div className="container imgMain">
                    <img src={image} width="400px" height="400px" alt="dish"/>
                </div>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                        <img src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-2.png" className="icon" alt="recipe"/>
                        {ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default MyRecipesComponent;