import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'

const Products = () => {
    const products = [
        {
          productId: 1,
          images: [
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
              alt: "Two each of gray, white, and black shirts laying flat.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
              alt: "Model wearing plain black basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
              alt: "Model wearing plain gray basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
              alt: "Model wearing plain white basic tee.",
            },
          ],
          discount : '50',
          price: '$35',
          title: 'Basic Tee',
          href: '#',
          imageAlt: "Front of men's Basic Tee in black.",
          color: 'Black',
        },
        {
          productId: 2,
          images: [
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
              alt: "Two each of gray, white, and black shirts laying flat.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
              alt: "Model wearing plain black basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
              alt: "Model wearing plain gray basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
              alt: "Model wearing plain white basic tee.",
            },
          ],
          discount : '50',
          price: '$35',
          title: 'Basic Tee',
          href: '#',
          imageAlt: "Front of men's Basic Tee in black.",
          color: 'Black',
        },
        {
          productId: 3,
          images: [
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
              alt: "Two each of gray, white, and black shirts laying flat.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
              alt: "Model wearing plain black basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
              alt: "Model wearing plain gray basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
              alt: "Model wearing plain white basic tee.",
            },
          ],
          discount : '50',
          price: '$35',
          title: 'Basic Tee',
          href: '#',
          imageAlt: "Front of men's Basic Tee in black.",
          color: 'Black',
        },
        {
          productId: 4,
          images: [
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
              alt: "Two each of gray, white, and black shirts laying flat.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
              alt: "Model wearing plain black basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
              alt: "Model wearing plain gray basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
              alt: "Model wearing plain white basic tee.",
            },
          ],
          discount : '50',
          price: '$35',
          title: 'Basic Tee',
          href: '#',
          imageAlt: "Front of men's Basic Tee in black.",
          color: 'Black',
        },
        {
          productId: 5,
          images: [
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
              alt: "Two each of gray, white, and black shirts laying flat.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
              alt: "Model wearing plain black basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
              alt: "Model wearing plain gray basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
              alt: "Model wearing plain white basic tee.",
            },
          ],
          discount : '50',
          price: '$35',
          title: 'Basic Tee',
          href: '#',
          imageAlt: "Front of men's Basic Tee in black.",
          color: 'Black',
        },
        {
          productId: 6,
          images: [
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
              alt: "Two each of gray, white, and black shirts laying flat.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
              alt: "Model wearing plain black basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
              alt: "Model wearing plain gray basic tee.",
            },
            {
              src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
              alt: "Model wearing plain white basic tee.",
            },
          ],
          discount : '50',
          price: '$35',
          title: 'Basic Tee',
          href: '#',
          imageAlt: "Front of men's Basic Tee in black.",
          color: 'Black',
        },
        // More products...
      ]
  return (
    <>
    <ProductStyled>
        <Container className="my-5">
            <div className="text-center" style={{color: '#324d67'}}>
                <h2 className="fw-bold">Best Seller Products</h2>
                <span>speaker There are many variations passages</span>
            </div>
            {!products?.length > 0 ? <div className="pt-4 pb-4 mt-5 d-flex justify-content-center align-items-center"><Spinner animation="grow" variant=" " /></div> : <div className="d-flex flex-wrap mt-5">
                {products?.map((product, ind) => {
                    return (
                    <div key={ind} className="product px-2 mb-4">
                        <a href={`products/${product.productId}`}>
                            <div className="d-flex justify-content-center mb-1"><img src={product.images[0].src} alt={product.title} /></div>
                            <span className="title d-block ms-2">{product.title.length >= 30 ? product.title.slice(0, 30) + '...' : product.title}</span>
                            { product.discount !== 0 && <span className="fw-bold ms-2">${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</span>}
                            <span style={{ textDecoration: product.discount !== 0 ? 'line-through' : 'none', color: product.discount !== 0 ? '#929292' : '#333'}} className="fw-bold ms-2">${product.price}</span>
                            {product.discount !== 0 && <span className='discount'>-%{product.discount}</span>}
                        </a>
                    </div>
                    )}
                )}
            </div>}
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products