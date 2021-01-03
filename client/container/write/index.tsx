import * as React from 'react';
import HeaderSub from '../../components/HeaderSub';
import { RouteComponentProps, withRouter } from 'react-router-dom';

function Index(props: RouteComponentProps) {
  const { history } = props;

  const handleClickBackButton = () => {
    history.goBack();
  };

  return (
    <div>
      <HeaderSub onClickBackButton={handleClickBackButton} />
      <div>

      </div>
    </div>
  );
}

export default withRouter(Index);
