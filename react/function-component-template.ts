import * as React from "react";

const ComponentName: React.SFC<IProps> = props => {
 const handler = () => {
 ...
 };

 return (
 <div>Our JSX</div>
 );
};
ComponentName.defaultProps = {
 ...
};

export default ComponentName;