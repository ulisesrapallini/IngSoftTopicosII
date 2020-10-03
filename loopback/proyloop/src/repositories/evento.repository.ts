import {DefaultCrudRepository} from '@loopback/repository';
import {Evento, EventoRelations} from '../models';
import {LoopdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EventoRepository extends DefaultCrudRepository<
  Evento,
  typeof Evento.prototype.id,
  EventoRelations
> {
  constructor(
    @inject('datasources.loopdb') dataSource: LoopdbDataSource,
  ) {
    super(Evento, dataSource);
  }
}
