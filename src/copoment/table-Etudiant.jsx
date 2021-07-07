import PropTypes from 'prop-types';
import TableEtudiantItem from './table-Etudiant-Item';

const TableEtudiant = (props) => {

    const etudiantJSX = props.etudiant.map(
p=> <TableEtudiantItem key={p.id} {...p}/>
    );
    return (
        <>											
            <h2>Liste des Etudiants</h2>
            <table>
                <thead>									
                    <tr>
                        <th>Nom</th>					
                        <th>Prenom</th>
                        <th>Option</th>
                        <th>Sexe</th>
                        <th>Resultat</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {etudiantJSX}						
                </tbody>
            </table>
        </>												
    )
}

TableEtudiant.propTypes = {								
    etudiant: PropTypes.array
}

export default TableEtudiant;
