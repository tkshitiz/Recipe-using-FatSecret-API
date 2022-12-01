
import style from './recipe.module.css'
const Recipes = ({title , calorie , image ,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calorie}</p>
            <img className={style.image} src={image} alt=''></img>
            <ol>
                {ingredients.map((ingredient)=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}
export default Recipes

