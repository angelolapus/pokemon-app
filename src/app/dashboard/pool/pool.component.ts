import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'angelolapus-pokemon-service';
import { PokemonPoolFacadeService } from 'angelolapus-service-facade';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit, AfterViewInit {

  pokemonPool = new Array<Pokemon>();
  displayedColumns: string[] = ['index','name'];
  dataSource: MatTableDataSource<Pokemon>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pokemonPoolFacadeService: PokemonPoolFacadeService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.pokemonPoolFacadeService.loadAllPokemons();
    this.pokemonPoolFacadeService.getAllPokemons
    .subscribe((response: Pokemon[])=>{

      this.pokemonPool = response;
      this.dataSource = new MatTableDataSource(this.pokemonPool);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
