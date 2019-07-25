import { Container } from 'reactstrap'
import { Prop } from 'prop-types';
const BasePage = (props) =>{
    const {className} =props
    
    return(
        <div className={`base-page ${className}`}>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}
BasePage.defaultProps ={
    className : ''
}
// BasePage.propTypes = {
//     className : propTypes.any.isRequired
// }
export default BasePage