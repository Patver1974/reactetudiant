
import './App.css';
import {nanoid} from 'nanoid';
import TableEtudiant from './copoment/table-Etudiant';

function App() {
  const etudiant = [
{id:nanoid(),
  nom: 'ver',
  prenom: 'patrick',
  option: 'inform',
  sexe: 'Masculin',
  resultat:'50'},

  {id:nanoid(),
    nom: 'vander',
    prenom: 'duck',
    option: 'litterature',
    sexe: 'Feminin',
    resultat:'41'},
    {id:nanoid(),
      nom: 'nom6',
      prenom: 'duck6',
      option: 'calcul',
      sexe: 'Feminin',
      },
      {id:nanoid(),
        nom: 'piper',
        prenom: 'marc',
        option: 'toutes',
        sexe: 'Feminin',
        resultat:'99'},
    
    {id:nanoid(),
      nom: 'dust',
      prenom: 'marie',
      option: 'geographie',
      sexe: 'neutre',
      resultat:'5'}
    ]
      return (
        <div className="">
          <h1>Liste Etudiant</h1>
    
          
          <TableEtudiant etudiant={etudiant} />   
        </div>);

}

export default App;
