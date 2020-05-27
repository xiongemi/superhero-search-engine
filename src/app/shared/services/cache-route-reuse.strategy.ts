import { RouteReuseStrategy } from '@angular/router/';
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { RoutePath } from 'src/app/types/route-path.enum';

/**
 * Inspired by https://itnext.io/cache-components-with-angular-routereusestrategy-3e4c8b174d5f
 */
export class CacheRouteReuseStrategy implements RouteReuseStrategy {
  storedRouteHandles = new Map<string, DetachedRouteHandle>();

  allowRetriveCache = {
    search: true
  };

  shouldReuseRoute(before: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if (this.getPath(before) === RoutePath.details && this.getPath(curr) === RoutePath.search) {
      this.allowRetriveCache.search = true;
    } else {
      this.allowRetriveCache.search = false;
    }
    return before.routeConfig === curr.routeConfig;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRouteHandles.get(this.getPath(route)) as DetachedRouteHandle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route);
    if (path && this.allowRetriveCache[path]) {
      return this.storedRouteHandles.has(path);
    }

    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route);
    if (path && this.allowRetriveCache.hasOwnProperty(path)) {
      return true;
    }
    return false;
  }

  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    this.storedRouteHandles.set(this.getPath(route), detachedTree);
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    return route?.routeConfig?.path;
  }
}
