'use client';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  const navigateHome = useNavigate();

  const onCloseModal = () => {
    setOpenModal(false);
    setName('');
    setMobile('');
    setAddress('');
    setPin('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !mobile || !pin) {
      toast.error('All fields are required');
    } else {
      toast.success('Order placed. Thank you!');
      navigateHome('/');
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className='text-white text-3xl border-none w-full rounded-none checkout-btn'>Checkout</Button>
      <Modal show={openModal} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Order details</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="abc"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="address"
                placeholder="street no.4 "
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value="Your mobile " />
              </div>
              <TextInput
                id="mobile"
                placeholder="1234567890"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="pin" value="Your pin code " />
              </div>
              <TextInput
                id="pin"
                placeholder="123-456"
                value={pin}
                onChange={(event) => setPin(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-center pt-4">
            <Button onClick={handleSubmit}>Place Order</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Checkout;
