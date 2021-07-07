
import PropTypes from 'prop-types';
//import AjouterStyle from './style.css';

const TableEtudiantItem = (props) => {
const {nom, prenom, option, sexe, resultat} = props;
let grade="0"; let cote=0;
if (isNaN(resultat)){cote='pas de resultat'; grade=""};
if (resultat<40) {grade='IG'; cote=resultat};
if (resultat<49 && resultat>=40) {grade='I'; cote=resultat};
if (resultat<59 && resultat>=50) {grade='S'; cote=resultat};
if (resultat<79 && resultat>=60) {grade='B'; cote=resultat};
if (resultat<95 && resultat>=80) {grade='TB'; cote=resultat};
if (resultat<100 && resultat>=95) {grade='E'; cote=resultat };


return (
<tr>
<td>{nom}</td>
<td>{prenom}</td>
<td>{option}</td>
<td>{sexe}</td>
<td> {cote}</td>
<td> {grade}</td>
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




