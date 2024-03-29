import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config';

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something'
    })
  }

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false);
        console.log(doc.data());
        setRecipe(doc.data())
      } else {
        setIsPending(false);
        setError('Could not find recipe!')
      }
    }, (err) => {
      setError(err.message);
      setIsPending(false);
    })

  return () => unsub()

}, [id])

return (
  <div className={`recipe ${mode}`}>
    {error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {recipe && (
      <>
        <h2 className="page-title">{recipe?.title}</h2>
        <p>Takes {recipe?.cookingTime} to cook.</p>
        <ul>
          {recipe?.ingredients ? recipe.ingredients.map(ing => <li key={ing}>{ing}</li>) : 'no ingredients'}
        </ul>
        <p className="method">{recipe?.method}</p>
        <button onClick={handleClick}>Update me</button>
      </>
    )}
  </div>
)
}