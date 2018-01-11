import React from 'react';

export interface BreadcrumbProps {
  children:
    | Array<React.ReactElement<ChildProps>>
    | React.ReactElement<ChildProps>;
  withoutTrailingSlash?: boolean;
}

interface ChildProps {
  to?: string;
  href?: string;
}

const { map } = React.Children;
const mapper = (children: Array<React.ReactElement<ChildProps>> | React.ReactElement<ChildProps>) => (
  map(children, (child: React.ReactElement<ChildProps>, i: number) => (
    child && <li key={child.props.to || child.props.href}><child.type {...child.props} /></li>
  ))
);

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  withoutTrailingSlash,
}) => (
  <ol className="breadcrumb">
    {mapper(children)}
    {!withoutTrailingSlash && <li />}
  </ol>
);

Breadcrumb.defaultProps = {
  withoutTrailingSlash: false,
};

export default Breadcrumb;