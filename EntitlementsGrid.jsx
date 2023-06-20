import React from 'react';
import '../App.css';
import "../s1.css"
import '../overwrites.css'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import {useState} from 'react';
import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("CompanyName=KKR,LicensedGroup=KKR Credit Tech 1,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-008671,ExpiryDate=24_June_2021_[v2]_MTYyNDQ4OTIwMDAwMA==9ba2fe4c126a19353c97ffad5cdbf8dc");


import { useQuery , QueryClient, QueryClientProvider  } from '@tanstack/react-query';

function EntitlementsGrid (props) {
  return(
  <QueryClientProvider client={queryClient}>
    <EntitlementsGrid2 props={props}/>
  </QueryClientProvider>
  )
}

const queryClient = new QueryClient();

const getDataPath = () => {
  return (data) => {
    return data.Parent;
  };
};

function EntitlementsGrid2(props) {

  const gridProps=props['props']
  const data=gridProps['data']
  const auto_group_col=gridProps['auto_group_col']
  
  const [content, setValue] = useState('main');
  const [rowData, setRowData] = useState([]);


  
  return (  
    <div style={{
      height: 'inherit'
    }}>

          {content ? (
                      <div style={{
                        height: 'inherit'
                      }} id ='test'>
                          <div
                          className="ag-theme-alpine auto-margin"
                          style={{
                            height: 'inherit'
                          }}
                        >
                          
                          <AgGridReact
                              columnDefs={gridProps['columnDefs']}
                              rowBuffer={0}
                              rowData={data}
                              domLayout={'normal'}
                              pagination={false}
                              treeData={true}
                              alwaysShowHorizontalScroll={true}
                              autoGroupColumnDef={auto_group_col}
                              getDataPath={getDataPath()}>
                                
                              
              
              
                                      </AgGridReact>
                                      </div>
                  </div>
                    )
                  : <div>beep</div>    
}

      </div>
    
  );
}

export default EntitlementsGrid;