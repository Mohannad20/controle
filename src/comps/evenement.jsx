import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from '../components/ui/table';
import Expert from './expert';
// import {Expert} from './expert';

const Evenement = ({ events }) => {
  const totalCost = events.reduce((acc, event) => acc + event.cout_journalier * event.durée, 0);

  return (
    <div className='w-fit flex justify-center'>
        {/* <h2 className='text-center font-bold text-2xl mb-4'>Liste des Événements</h2> */}

      <Table>
        {/* <Expert expert={events.nom_complet} /> */}
        
        <TableCaption>Liste des événements</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thème</TableHead>
            <TableHead>Date de début</TableHead>
            <TableHead>Date de fin</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Coût Journalier</TableHead>
            <TableHead>Durée (jours)</TableHead>
            <TableHead>Coût Total Event</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.thème}</TableCell>
              <TableCell>{event.date_debut}</TableCell>
              <TableCell>{event.date_fin}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.cout_journalier}</TableCell>
              <TableCell>{event.durée}</TableCell>
              <TableCell>{event.cout_journalier * event.durée}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>Total</TableCell>
            <TableCell>{totalCost}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
Evenement.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thème: PropTypes.string.isRequired,
      date_debut: PropTypes.string.isRequired,
      date_fin: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cout_journalier: PropTypes.number.isRequired,
      durée: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Evenement;