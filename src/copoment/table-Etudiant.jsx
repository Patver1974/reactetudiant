import PropTypes from 'prop-types';
import TableEtudiantItem from './table-Etudiant-Item';

const TableEtudiant = (props) => {

    const etudantJSX = props.products.map(
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
                    </tr>
                </thead>
                <tbody>
                    {etudantJSX}						
                </tbody>
            </table>
        </>												
    )
}

ProductTable.propTypes = {								
    products: PropTypes.array
}

export default TableEtudiant;
