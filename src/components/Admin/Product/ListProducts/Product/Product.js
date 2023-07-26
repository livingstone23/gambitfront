import { useState, useEffect } from "react";
import { Icon, Image, Table  } from "semantic-ui-react";
import { fn } from "@/utils";
import { Modal } from "@/components/Shared";
import { ProductForm } from "../../ProductForm";
import { ProductImageForm } from "../../ProductImageForm";
import styles from "./Product.module.scss";

const NOT_FOUND_IMAGE = "/images/not-found.jpg"

export  function Product(props) {
  const {product, onReload } = props;
  const [image, setImage] = useState(NOT_FOUND_IMAGE)
  const [ openModal, setOpenModal ] = useState(false);
  const [ modalContent, setModalContent ] = useState(null);
  //const image = fn.getUrlImage(product.prodID)
 

  useEffect(() => {

    const imageUrl = fn.getUrlImage(product.prodID);

    fn.checkIfImageExists(imageUrl, (exists) => {
      if (exists) {
        console.log("YES");
        setImage(imageUrl);
      } 
    });

  },[product]);


  const closeModal = () => {
      setOpenModal(false)
      setModalContent(null);
  }

  const openEditProduct = () => {
      setModalContent(<ProductForm 
                        onClose={closeModal} 
                        onReload={onReload} 
                        product={product}

                      />);
      setOpenModal(true);
  }


  const openEditImageProduct = () => {
    setModalContent(<ProductImageForm 
                        onClose={closeModal} 
                        onReload={onReload} 
                        productId={product.prodID}
                        
                    />);

    setOpenModal(true);
  }   

  return (
    <>
        
       <Table.Cell>{product.prodID}</Table.Cell> 
       <Table.Cell>
          <Image className={styles.image} src={image} alt={product.prodTitle} />
        </Table.Cell> 
       <Table.Cell>{product.prodTitle}</Table.Cell> 
       <Table.Cell>{product.prodPrice}$</Table.Cell> 
       <Table.Cell>{product.prodStock} UNIDADES</Table.Cell> 
       <Table.Cell className={styles.actions}>
          <Icon name="pencil" link onClick={openEditProduct} />
          <Icon name="image" link onClick={openEditImageProduct} />
          <Icon name="trash" link />
        </Table.Cell> 


        <Modal.Basic 
          show={openModal} 
          onClose={closeModal} 
          title={`Editar (${product.prodTitle})`} 
        >
          {modalContent}
        </Modal.Basic>
    </>
  )
}
