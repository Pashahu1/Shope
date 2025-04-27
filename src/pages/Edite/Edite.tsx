import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { putProducts } from '../../utils/httpClient';

export const Edite = () => {
  const { id } = useParams();
  const products = useSelector((state: any) => state.products);
  const productsId = Number(id);
  const existingProduct = products.find((p: any) => p.id === productsId);
  const navigation = useNavigate();
  const { updateProducts } = useActions();

  const [title, setTitle] = useState(existingProduct?.title || '');
  const [price, setPrice] = useState(existingProduct?.price || 0);
  const [description, setDescription] = useState(
    existingProduct?.description || '',
  );
  const [category, setCategory] = useState(existingProduct?.category || '');
  const [image, setImage] = useState(existingProduct?.image || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = {
      id: productsId,
      title,
      price: +price,
      description,
      category,
      image,
    };
    putProducts(productsId, updatedProduct);
    console.log('Updated product:', updatedProduct);
    updateProducts(updatedProduct);
    navigation('/products');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Update your Card</h1>

      <label htmlFor="title" className="form__label">
        Title
        <input
          id="title"
          type="text"
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
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="form__input"
        />
      </label>

      <label htmlFor="description" className="form__label">
        Description
        <textarea
          id="description"
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
          <option value="">Select</option>
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
          value={image}
          onChange={e => setImage(e.target.value)}
          className="form__input"
        />
      </label>

      <button type="submit" className="form__button">
        Send Post
      </button>
    </form>
  );
};
