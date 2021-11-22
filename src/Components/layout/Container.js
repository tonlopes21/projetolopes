import styles from './Container.module.css'

function Container (props){

    return <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
         </div>
    

}
//O children foi utilizado para pegar os filhos da tag Routes. 
export default Container