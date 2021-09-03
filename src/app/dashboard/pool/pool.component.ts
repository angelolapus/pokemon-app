import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'angelolapus-pokemon-service';
import { PokemonPoolFacadeService } from 'angelolapus-service-facade';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {

  pokemonPool = new Array<Pokemon>();
  constructor(private pokemonPoolFacadeService: PokemonPoolFacadeService) { }

  ngOnInit() {
    this.pokemonPoolFacadeService.loadAllPokemons();
    this.pokemonPoolFacadeService.getAllPokemons.subscribe((response: Pokemon[])=>{
      console.log('pokemon', response);
      this.pokemonPool = response;
    })
  }

}
