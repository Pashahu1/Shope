import { useState } from 'react';
import { postProducts } from '../../utils/httpClient';
import './CreateProduct.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/addNewProduct/addNewProductSlice';

export const CreateProduct = () => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !price || !description || !category || !image) {
      setError('Please fill in all fields');
      return;
    } else if (title.length < 3 || title.length > 10) {
      setError('Title must be at least 3 characters long and less than 10');
      return;
    } else if (price <= 0) {
      setError('Price must be greater than 0');
      return;
    } else if (description.length < 10 || description.length > 30) {
      setError(
        'Description must be at least 10 characters long and less than 30',
      );
      return;
    } else if (image.length < 10) {
      setError('Image link must be at least 10 characters long');
      return;
    } else {
      try {
        const newProduct = await postProducts({
          title,
          price,
          description,
          category,
          image,
        });

        dispatch(actions.addNewProduct(newProduct));
        setSuccess('Product created successfully!');
        setTitle('');
        setPrice(0);
        setDescription('');
        setCategory('');
        setImage('');
        setError('');
      } catch (error) {
        setError('Failed to create product. Please try again later.');
      }
    }
  };

  return (
    <form action="#" method="post" className="form" onSubmit={handleSubmit}>
      <h1>Create your Own Card</h1>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={e => setPrice(+e.target.value)}
      />
      <textarea
        placeholder="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <select
        name="category"
        id="category"
        onChange={e => setCategory(e.target.value)}
      >
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>

      <input
        type="text"
        placeholder="add link on your page..."
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <button type="submit">Send Post</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );
};
