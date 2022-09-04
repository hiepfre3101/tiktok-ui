/* eslint-disable no-lone-blocks */
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';



{/** target : use for create new portal in a HTML element with value like id or className */}
function Portal({ children, target, containerId='' }) { 
  
  const [root, setRoot] = useState();

  useEffect(() => {
    let portalRoot = document.querySelector(target);
    if (!portalRoot) {
     portalRoot = document.createElement('div');
      document.body.appendChild(portalRoot);
    }
     portalRoot.id=containerId
    setRoot(portalRoot);

    return () => {
      if(!target){
         document.body.removeChild(portalRoot);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (!root) {
    return null;
  }

  return ReactDOM.createPortal(children, root);
}

export default Portal;
