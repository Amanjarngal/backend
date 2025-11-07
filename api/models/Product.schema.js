import mongoose from 'mongoose'
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    price: {
      type: String,
      require: true
    },
    description: {
      type: String
    },
    category: {
      type: String,
      enum: ['toys', 'books', 'laptops', 'mobilephones', 'tablets', 'others'],
      require: true
    },
    image: {
      type: String
    },
    stock: {
      type: String,
      default: 0
    }
  },
  {
    timestamps: true
  }
)
export const Product = mongoose.model("Product", productSchema)
