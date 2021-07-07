
import PropTypes from 'prop-types';

const TableEtudiantItem = (props) => {
const {nom, prenom, option, sexe, resultat} = props;
return (
<tr>
<td>{nom}</td>
<td>{prenom}</td>
<td>{option}</td>
<td>{sexe}</td>
<td>{resultat}</td>
</tr>
)
}
TableEtudiantItem.protoTypes = {
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    sexe: PropTypes.string.isRequired,
    resultat: PropTypes.number.isRequired
}
export default TableEtudiantItem;




