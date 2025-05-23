import { useState } from 'react';
import { postProducts } from '../../utils/httpClient';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import './FormProduct.scss';
import { getNextProductId } from '../../helper/getNextProductId';
export const FormProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const navigate = useNavigate();
  const { addNewProduct } = useActions();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !price || !description || !category || !image) {
      setError('Please fill in all fields');
      return;
    } else if (title.length < 3 || title.length > 10 || Number(title)) {
      setError(
        'Title must be at least 3 characters long and less than 10 or it must not be a number',
      );
      return;
    } else if (price <= 0 || isNaN(price)) {
      setError('Price must be greater than 0 and not be a string');
      return;
    } else if (description.length < 10 || description.length > 30) {
      setError(
        'Description must be at least 10 characters long and less than 30',
      );
      return;
    } else if (!category || category === '') {
      setError('Please select a category');
      return;
    } else if (image.length < 10) {
      setError(
        'Image link must be at least 10 characters long and start with "http"',
      );
      return;
    } else {
      try {
        const newId = getNextProductId();

        const productData = {
          id: newId,
          title,
          price,
          description,
          category,
          image,
        };

        const createdProduct = await postProducts(productData);

        addNewProduct(createdProduct);

        setSuccess('Product created successfully!');

        setTimeout(() => {
          navigate('/products');
        }, 2000);

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
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Create your Own Card</h1>

      <label htmlFor="title" className="form__label">
        Title
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form__input"
        />
      </label>

      <label htmlFor="price" className="form__label">
        Price
        <input
          id="price"
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          className="form__input"
        />
      </label>

      <label htmlFor="description" className="form__label">
        Description
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="form__textarea"
        />
      </label>

      <label htmlFor="category" className="form__label">
        Category
        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="form__select"
        >
          <option disabled value="">
            Select
          </option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </label>

      <label htmlFor="image" className="form__label">
        Upload Image
        <input
          id="image"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
          className="form__input"
        />
      </label>

      <button type="submit" className="form__button">
        Send Post
      </button>

      {error && <p className="form__error">{error}</p>}
      {success && <p className="form__success">{success}</p>}
    </form>
  );
};
