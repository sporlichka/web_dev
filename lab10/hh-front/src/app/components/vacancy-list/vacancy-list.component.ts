import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Vacancy } from '../../interfaces/vacancy.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-vacancy-list',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="vacancy-list">
            <h2>Vacancies</h2>
            @for (vacancy of vacancies; track vacancy.id) {
                <div class="vacancy-card">
                    <h3>{{ vacancy.name }}</h3>
                    <p>{{ vacancy.description }}</p>
                    <p><strong>Salary:</strong> {{ vacancy.salary | currency }}</p>
                </div>
            }
        </div>
    `,
    styles: [`
        .vacancy-list {
            padding: 20px;
        }
        .vacancy-card {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .vacancy-card:hover {
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
    `]
})
export class VacancyListComponent implements OnInit {
    vacancies: Vacancy[] = [];

    constructor(
        private route: ActivatedRoute,
        private companyService: CompanyService
    ) { }

    ngOnInit(): void {
        const companyId = Number(this.route.snapshot.paramMap.get('id'));
        this.companyService.getCompanyVacancies(companyId).subscribe(
            vacancies => this.vacancies = vacancies
        );
    }
} 