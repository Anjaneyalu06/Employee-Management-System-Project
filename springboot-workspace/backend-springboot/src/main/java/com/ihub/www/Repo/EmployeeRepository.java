package com.ihub.www.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.modle.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>
{

}
