import React from 'react';
import { useRouteError } from 'react-router-dom';
import WarningElement from '../../../ui/warningElement/WarningElement';
import Pad from '../../../ui/pad/Pad';

interface RouteError {
  status: string;
  statusText: string;
}
const Error: React.FC = () => {
  const error = useRouteError() as RouteError;

  return (
    <Pad>
      <WarningElement status={error.status} statusText={error.statusText} is404={false} />
    </Pad>
  );
};

export default Error;
