import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-company-list',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="company-list">
            <h2>Companies</h2>
            @for (company of companies; track company.id) {
                <div class="company-card" (click)="showVacancies(company.id)">
                    <h3>{{ company.name }}</h3>
                    <p>{{ company.description }}</p>
                    <div class="company-info">
                        <p><strong>City:</strong> {{ company.city }}</p>
                        <p><strong>Address:</strong> {{ company.address }}</p>
                    </div>
                </div>
            }
        </div>
    `,
    styles: [`
        .company-list {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .company-card {
            border: 1px solid #ddd;
            padding: 20px;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 8px;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .company-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .company-info {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #eee;
        }
        h2 {
            color: #333;
            margin-bottom: 20px;
        }
        h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        p {
            color: #666;
            line-height: 1.5;
        }
    `]
})
export class CompanyListComponent implements OnInit {
    companies: Company[] = [];

    constructor(
        private companyService: CompanyService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.companyService.getCompanies().subscribe(
            companies => this.companies = companies
        );
    }

    showVacancies(companyId: number): void {
        this.router.navigate(['/companies', companyId, 'vacancies']);
    }
} 