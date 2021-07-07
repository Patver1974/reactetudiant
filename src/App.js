
import './App.css';
import {nanoid} from 'nanoid';

function App() {
  const etudiant = [
{id:nanoid(),
  nom: 'ver',
  prenom: 'patrick',
  option: 'inform',
  sexe: 'Masculint',
  resultat:'50'},

  {id:nanoid(),
    nom: 'vander',
    prenom: 'duck',
    option: 'litterature',
    sexe: 'Feminint',
    resultat:'56'},
    
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
