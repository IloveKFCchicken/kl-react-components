import React from 'react';
import './index.less'



interface PageProps {
  children: React.ReactNode,
  title: string,
}

function Page({ title, children }: PageProps) {
  return (
    <div className="kl-page">
      {
        title && <div className="page--title">{title}</div>
      }
      <div className="page--container">
        {children}
      </div>
    </div>
  )
}

export default Page