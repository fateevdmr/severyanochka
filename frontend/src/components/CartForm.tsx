import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCart } from '../pages/CartContext';
import style from '../Styles/cartForm.module.css';

interface CartFormProps {
  totalAmount: number;
  onOrderSubmit: () => void;
}

const stockPrice = 0.2;

const CartForm: React.FC<CartFormProps> = ({ totalAmount, onOrderSubmit }) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useLocalStorage('cartFormData', {
    name: '',
    phone: '',
    promoCode: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  const validateForm = () => {
    const newErrors = { name: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    }

    const phoneRegex = /^\+?[0-9]{10,12}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone;
  };

  const calculateDiscount = () => {
    if (formData.promoCode.toLowerCase() === 'december') {
      return totalAmount * stockPrice; // 20% скидка
    }
    return 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      clearCart();
      onOrderSubmit();
      setFormData({ name: '', phone: '', promoCode: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const discount = calculateDiscount();
  const finalAmount = totalAmount - discount;

  return (
    <form onSubmit={handleSubmit} className={style.cartForm}>
      <h2 className={style.title}>Оформление заказа</h2>

      <div className={style.formGroup}>
        <label htmlFor="name" className={style.label}>
          Имя
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Введите ваше имя"
          className={errors.name ? style.errorInput : style.input}
        />
        {errors.name && <span className={style.errorMessage}>{errors.name}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="phone" className={style.label}>
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Введите номер телефона"
          className={errors.phone ? style.errorInput : style.input}
        />
        {errors.phone && <span className={style.errorMessage}>{errors.phone}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="promoCode" className={style.label}>
          Промокод
        </label>
        <input
          id="promoCode"
          type="text"
          name="promoCode"
          value={formData.promoCode}
          onChange={handleChange}
          placeholder="Введите промокод (если есть)"
          className={style.input}
        />
      </div>

      <div className={style.orderSummary}>
        <p className={style.orderText}>Сумма заказа: <span>{totalAmount} ₽</span></p>
        {discount > 0 && (
          <p className={style.discountText}>Скидка: <span>20%</span></p>
        )}
        <p className={style.finalAmount}>Итого к оплате: <span>{finalAmount} ₽</span></p>
      </div>

      <button type="submit" className={style.submitButton}>
        Подтвердить заказ
      </button>
    </form>
  );
};

export default CartForm;

