import React, {useEffect, useContext} from "react";
import axios from "axios";
import AuthContext from '../context/AuthProvider';




export class AuthService  {

static data1 = {
    production: true,
    apiReadAvailAngular: 'https://libapps.tamucc.edu/api-staging/exgen/getauthdetails.php',
    apiReadAvailAngularUpdateStatus: 'https://libapps.tamucc.edu/api/liblayout/read_Avail_Angular_status_staging.php',
    apiReadTest: 'https://libapps.tamucc.edu/api/liblayout/test.php',
    apiReadNxWkSchedule: 'https://libapps.tamucc.edu/api/liblayout/next-week-schedule.php',
    apiReadAvailmap: 'https://libapps.tamucc.edu/api/liblayout/read_AvailMap.php',
    apiUpdateAvailAngular: 'https://libapps.tamucc.edu/api/liblayout/update_Avail_Angular.php',
    apiUpdatesystemStatusAngular: 'https://libapps.tamucc.edu/api/liblayout/update.status_Angular.php',
    apibulkUpdatesystemStatusAngular: 'https://libapps.tamucc.edu/api/liblayout/update.status_Angular_allMachine.php'
  };
  static data2 = {
    production: false,
    apiReadAvailAngular: 'https://libapps.tamucc.edu/api-staging/liblayout/read_Avail_Angular.php',
    apiReadAvailAngularUpdateStatus: 'https://libapps.tamucc.edu/api-staging/liblayout/read_Avail_Angular_status_staging.php',
    apiReadTest: 'https://libapps.tamucc.edu/api-staging/liblayout/test.php',
    apiReadNxWkSchedule: 'https://libapps.tamucc.edu/api-staging/liblayout/next-week-schedule.php',
    apiReadAvailmap: 'https://libapps.tamucc.edu/api-staging/liblayout/read_AvailMap.php',
    apiUpdateAvailAngular: 'https://libapps.tamucc.edu/api-staging/liblayout/update_Avail_Angular.php',
    apiUpdatesystemStatusAngular: 'https://libapps.tamucc.edu/api-staging/liblayout/update.status_Angular.php',
    apibulkUpdatesystemStatusAngular: 'https://libapps.tamucc.edu/api-staging/liblayout/update.status_Angular_allMachine.php'
  };
  
  static async getERSystems() {
    try {
       const dataMOD = this.data2.apiReadAvailAngular + '?param=ER';
        const res = await axios.get(dataMOD);
        console.log(res.data);
        return res;
      
    } catch (error) {
        // Handle errors
        console.log(error);
        const res = "Notsent";
        return res;
    }    
  }
  static async getCl1Systems() {
    try {
       const dataMOD = this.data2.apiReadAvailAngular + '?param=CL1';
        const res = await axios.get(dataMOD);
        console.log(res.data);
        return res;
      
    } catch (error) {
        // Handle errors
        console.log(error);
        const res = "Notsent";
        return res;
    }    
  }
 
}
