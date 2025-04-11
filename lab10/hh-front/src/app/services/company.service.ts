import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company.interface';
import { Vacancy } from '../interfaces/vacancy.interface';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private apiUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) { }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(`${this.apiUrl}/companies/`);
    }

    getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.apiUrl}/companies/${companyId}/vacancies/`);
    }
} 