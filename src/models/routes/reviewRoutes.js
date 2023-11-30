
const express = require('express');
const router = express.Router();
const {
  addReview,
  getAllReviews,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

router.post('/', addReview);
router.get('/', getAllReviews);
router.put('/:reviewId', updateReview);
router.delete('/:reviewId', deleteReview);

module.exports = router;
