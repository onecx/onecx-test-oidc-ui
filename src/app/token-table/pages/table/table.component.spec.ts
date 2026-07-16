import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LetDirective } from '@ngrx/component'
import { StoreModule } from '@ngrx/store'
import { TranslateService } from '@ngx-translate/core'

import { AuthProxyService } from '@onecx/angular-auth'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [LetDirective, StoreModule.forRoot({})],
      providers: [
        {
          provide: TranslateService,
          useValue: {}
        },
        {
          provide: AuthProxyService,
          useValue: {
            getHeaderValues: () => ({})
          }
        }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should format header values to table rows', () => {
    const headerValues = {
      Authorization: 'Bearer token',
      Tenant: 'demo'
    }

    const result = component.formatHeaderValuesForTable(headerValues)

    expect(result).toEqual([
      {
        id: 'Authorization',
        key: 'Authorization',
        token: 'Bearer token'
      },
      {
        id: 'Tenant',
        key: 'Tenant',
        token: 'demo'
      }
    ])
  })

  it('should format data as json string', () => {
    const data = {
      name: 'John',
      age: 30
    }

    const result = component.formatData(data)

    expect(result).toBe(JSON.stringify(data))
  })
})
