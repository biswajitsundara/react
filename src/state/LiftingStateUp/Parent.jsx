import React, { useState } from 'react';
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);
  
    // Callback function to update state
    function incrementCount() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <Child count={count} increment={incrementCount} />
      </div>
    );
  }
  
  export default Parent;