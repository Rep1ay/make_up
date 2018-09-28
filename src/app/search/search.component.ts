import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsCollectionClass } from '../productsCollectionCLass';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productsCollection: ProductsCollectionClass[] = [];
  productBrands: any;
  filteredBrands: ProductsCollectionClass[] = [];
  productUniqeBrands: ProductsCollectionClass[] = [];
  keyWord: any;
  productIsNotFound: any;
  private _productsCollection: ProductsCollectionClass[] = [];
  constructor( private _route: ActivatedRoute,
                private service: ProductsService,
                ) { }

  ngOnInit() {
    this.keyWord = this._route.snapshot.queryParams.value;
    this.service.getProducts()
      .subscribe(
        (res) => this.getProducts(res, this.keyWord),
        (error) => console.log(error)
      )
  }

  getProducts(res, keyword) {
    this.productsCollection = [];
    const uniqeBrands = new Set;

    res.filter(e => {
     const filterResult = (string ) => (string.replace(/[^0-9a-z]/g, '').toLowerCase());

      if ((filterResult( e.brand || 'nonBrand').match(filterResult(keyword)))
          || (filterResult(e.name || 'nonName' ).match(filterResult(keyword)))
          || (filterResult(e.product_type || 'nonType' ).match(filterResult(keyword)))
          || (filterResult(e.category || 'nonType' ).match(filterResult(keyword)))
        ) {
        this._productsCollection.push(e);
        this.productsCollection.push(e);
        uniqeBrands.add(e.brand);
      }
    });

    if (this.productsCollection.length === 0) {
      this.productIsNotFound = keyword;
    }
    this.getProductsBrands(uniqeBrands);
  }

  getProductsBrands(uniqeBrands) {
    uniqeBrands.forEach(brand => {
      this.productUniqeBrands.push(brand);
    });
  }

  filterByBrand(brand, input, productsContainer) {
    this.productsCollection = this._productsCollection;
    this.filteredBrands = [];
    this.productsCollection.filter(obj => {
      if ( obj.brand === brand) {
        this.filteredBrands.push(obj);
      }
    });
    this.productsCollection = this.filteredBrands;
  }

  showAllBrands() {
    this.productsCollection = this._productsCollection;
  }
}