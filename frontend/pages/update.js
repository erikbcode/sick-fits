import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, useRouter } from 'next/router';
import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage() {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
