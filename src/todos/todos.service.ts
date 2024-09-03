/* eslint-disable prettier/prettier */
import {  Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';



@Injectable()
export class TodosService {
  
  constructor(@InjectRepository(Todo) private readonly todoRepository :Repository<Todo>){}
   
   async create(createTodoDto: CreateTodoDto){
     return await  this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return  this.todoRepository.find();
  }

  findOne(id: number) {
    return   this.todoRepository.findOneBy({id}); ;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.save (updateTodoDto) ;
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
